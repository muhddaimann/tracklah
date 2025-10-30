import React from 'react';
import { View, Pressable, Animated } from 'react-native';
import { Link, usePathname, type LinkProps } from 'expo-router';
import { Home, Layers, ChevronLeft, ChevronRight, Sun, Moon } from 'lucide-react-native';
import { Text } from '@/components/atom';
import { cn } from '@/lib/utils';
import { useSidebarContext } from '@/contexts/sidebarContext';
import { useColorScheme } from 'nativewind';

const normalizePath = (p: string) => p.replace(/\/\([^)]*\)\//g, '/').replace(/\/+$/, '') || '/';

function NavItem({ href, label, Icon }: { href: LinkProps['href']; label: string; Icon: any }) {
  const pathname = usePathname();
  const current = normalizePath(pathname);
  const targetRaw = typeof href === 'string' ? href : ((href as any)?.pathname ?? '');
  const target = normalizePath(targetRaw);
  const active = current === target;
  const { isCollapsed } = useSidebarContext();

  return (
    <Link asChild href={href}>
      <Pressable
        accessibilityRole="button"
        className={cn(
          'relative my-1 rounded-lg outline-none transition-colors duration-150',
          isCollapsed
            ? cn(
                'mx-1 h-9 items-center justify-center px-0',
                active ? 'bg-primary/15 dark:bg-primary/25' : 'hover:bg-muted/50'
              )
            : cn(
                'mx-2 flex-row items-center px-2 py-2',
                active ? 'bg-primary/15 dark:bg-primary/25' : 'hover:bg-muted/50'
              ),
          'focus-visible:ring-2 focus-visible:ring-ring'
        )}>
        {!isCollapsed && (
          <View
            className={cn(
              'absolute left-0 h-5 w-1.5 rounded-r',
              active ? 'bg-primary' : 'bg-transparent'
            )}
          />
        )}

        <Icon size={18} className={cn(active ? 'text-primary' : 'text-muted-foreground')} />

        {!isCollapsed && (
          <Text className={cn('ml-3', active ? 'text-primary' : 'text-foreground')}>{label}</Text>
        )}
      </Pressable>
    </Link>
  );
}

export function Sidebar() {
  const { isCollapsed, toggleSidebar } = useSidebarContext();
  const { colorScheme, setColorScheme } = useColorScheme();
  const width = React.useRef(new Animated.Value(isCollapsed ? 80 : 256)).current;

  React.useEffect(() => {
    Animated.timing(width, {
      toValue: isCollapsed ? 80 : 256,
      duration: 180,
      useNativeDriver: false,
    }).start();
  }, [isCollapsed]);

  const toggleTheme = () => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');

  return (
    <Animated.View style={{ width }}>
      <View className="h-full border-r border-border bg-background">
        {isCollapsed ? (
          <View className="items-center px-2 py-3">
            <Pressable
              onPress={toggleSidebar}
              className="rounded-md p-2 focus-visible:ring-2 focus-visible:ring-ring active:opacity-80"
              accessibilityLabel="Expand sidebar">
              <ChevronRight size={16} className="text-foreground" />
            </Pressable>
          </View>
        ) : (
          <View className="flex-row items-center justify-between px-3 py-3">
            <Text className="text-base font-semibold text-foreground">Design Toolkit</Text>
            <Pressable
              onPress={toggleSidebar}
              className="rounded-md p-2 focus-visible:ring-2 focus-visible:ring-ring active:opacity-80"
              accessibilityLabel="Collapse sidebar">
              <ChevronLeft size={16} className="text-foreground" />
            </Pressable>
          </View>
        )}

        <View className="mx-3 h-px bg-border" />

        <View className="mt-1">
          <NavItem href="/(tabs)/a" label="Home" Icon={Home} />
          <NavItem href="/(tabs)/b" label="Components" Icon={Layers} />
        </View>

        <View className={cn('mt-auto gap-2 p-3', isCollapsed && 'items-center')}>
          <Pressable
            onPress={toggleTheme}
            className={cn(
              'rounded-lg border outline-none focus-visible:ring-2 focus-visible:ring-ring active:opacity-80',
              'border-border',
              colorScheme === 'dark' ? 'bg-input/30' : 'bg-accent/20',
              isCollapsed
                ? 'h-9 w-9 items-center justify-center'
                : 'flex-row items-center px-3 py-2'
            )}
            accessibilityLabel="Toggle theme">
            {colorScheme === 'dark' ? (
              <>
                <Sun size={16} className="text-foreground" />
                {!isCollapsed && <Text className="ml-2 text-sm text-foreground">Light</Text>}
              </>
            ) : (
              <>
                <Moon size={16} className="text-foreground" />
                {!isCollapsed && <Text className="ml-2 text-sm text-foreground">Dark</Text>}
              </>
            )}
          </Pressable>

          {!isCollapsed && <Text className="text-[11px] text-muted-foreground">v0.1.0</Text>}
        </View>
      </View>
    </Animated.View>
  );
}
