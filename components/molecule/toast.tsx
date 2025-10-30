import { cn } from '@/lib/utils';
import { useOverlay } from '@/hooks/useOverlay';
import React from 'react';
import { View, Text, Pressable, Animated, Easing } from 'react-native';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react-native';

type ToastVariant = 'default' | 'success' | 'error' | 'info';

function ToastIcon({ variant }: { variant?: ToastVariant }) {
  switch (variant) {
    case 'success':
      return <CheckCircle2 size={18} className="text-emerald-500" />;
    case 'error':
      return <AlertCircle size={18} className="text-rose-500" />;
    case 'info':
      return <Info size={18} className="text-blue-500" />;
    default:
      return <Info size={18} className="text-primary" />;
  }
}

function useToastAnimation() {
  const opacity = React.useRef(new Animated.Value(0)).current;
  const translate = React.useRef(new Animated.Value(-12)).current;

  const inAnim = React.useCallback(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 180,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(translate, {
        toValue: 0,
        duration: 180,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
    ]).start();
  }, [opacity, translate]);

  const outAnim = React.useCallback(
    (cb?: () => void) => {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 160,
          easing: Easing.in(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(translate, {
          toValue: -12,
          duration: 160,
          easing: Easing.in(Easing.quad),
          useNativeDriver: true,
        }),
      ]).start(() => cb?.());
    },
    [opacity, translate]
  );

  return { opacity, translate, inAnim, outAnim };
}

function ToastItem({
  id,
  message,
  variant,
  onClose,
  duration = 3500,
}: {
  id: string;
  message: string;
  variant?: ToastVariant;
  onClose: (id: string) => void;
  duration?: number;
}) {
  const { opacity, translate, inAnim, outAnim } = useToastAnimation();

  React.useEffect(() => {
    inAnim();
    const t = setTimeout(() => outAnim(() => onClose(id)), duration);
    return () => clearTimeout(t);
  }, [id, duration, inAnim, outAnim, onClose]);

  return (
    <Animated.View style={{ opacity, transform: [{ translateY: translate }] }}>
      <View
        className={cn(
          'w-full max-w-sm overflow-hidden rounded-lg border bg-card shadow-lg transition-all hover:shadow-xl',
          'flex-row',
          variant === 'success' && 'border-emerald-500',
          variant === 'error' && 'border-rose-500',
          variant === 'info' && 'border-blue-500'
        )}>
        <View
          className={cn(
            'w-1.5',
            variant === 'success' && 'bg-emerald-500',
            variant === 'error' && 'bg-rose-500',
            variant === 'info' && 'bg-blue-500',
            (!variant || variant === 'default') && 'bg-primary'
          )}
        />
        <View className="p-3">
          <ToastIcon variant={variant} />
        </View>

        <View className="flex-1 py-3 pr-3">
          <Text className="text-sm font-medium text-foreground">{message}</Text>
        </View>

        <View className="py-2 pr-2">
          <Pressable
            onPress={() => outAnim(() => onClose(id))}
            className="rounded-md p-1.5 opacity-70 transition-opacity hover:opacity-100 focus-visible:ring-1 focus-visible:ring-ring active:opacity-70">
            <X size={16} className="text-foreground" />
          </Pressable>
        </View>
      </View>
    </Animated.View>
  );
}

export function ToastHost() {
  const { toasts, hideToast } = useOverlay();
  if (!toasts.length) return null;

  return (
    <View className="pointer-events-none absolute inset-0 z-50 items-end justify-end p-4">
      <View className="pointer-events-auto w-full max-w-sm gap-2">
        {[...toasts].reverse().map((t) => (
          <ToastItem
            key={t.id}
            id={t.id}
            message={t.message}
            variant={t.variant}
            onClose={hideToast}
          />
        ))}
      </View>
    </View>
  );
}
