import React from 'react';
import { View, Pressable, Animated } from 'react-native';
import { Link, usePathname, type LinkProps } from 'expo-router';
import { Home, Layers, ChevronLeft, ChevronRight, Sun, Moon } from 'lucide-react-native';
import { Text } from '@/components/atom';
import { cn } from '@/lib/utils';
import { useSidebarContext } from '@/contexts/sidebarContext';
import { useColorScheme } from 'nativewind';

function NavItem({ href, label, Icon }: { href: LinkProps['href']; label: string; Icon: any }) {
  const pathname = usePathname();
  const target = typeof href === 'string' ? href : ((href as any)?.pathname ?? '');
  const active = pathname === target;
  const { isCollapsed } = useSidebarContext();

  return (
    <Link asChild href={href}>
      <Pressable
        accessibilityRole="button"
        className={cn(
          'mx-2 my-1 flex-row items-center rounded-lg px-2 py-2 outline-none',
          active ? 'bg-accent' : 'bg-transparent',
          'focus-visible:ring-2 focus-visible:ring-ring'
        )}
      >
        <Icon size={18} className={cn(active ? 'text-accent-foreground' : 'text-muted-foreground')} />
        {!isCollapsed && (
          <Text className={cn('ml-3', active ? 'text-accent-foreground' : 'text-foreground')}>
            {label}
          </Text>
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
    Animated.timing(width, { toValue: isCollapsed ? 80 : 256, duration: 180, useNativeDriver: false }).start();
  }, [isCollapsed]);

  const toggleTheme = () => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');

  return (
    <Animated.View style={{ width }}>
      <View className="h-full border-r border-border bg-background">
        <View className="flex-row items-center justify-between px-3 py-3">
          {!isCollapsed ? (
            <Text className="text-base font-semibold text-foreground">Design Toolkit</Text>
          ) : (
            <Text className="text-base font-semibold text-primary">Dt</Text>
          )}
          <Pressable
            onPress={toggleSidebar}
            className="rounded-md p-2 focus-visible:ring-2 focus-visible:ring-ring active:opacity-80"
            accessibilityLabel={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? (
              <ChevronRight size={16} className="text-foreground" />
            ) : (
              <ChevronLeft size={16} className="text-foreground" />
            )}
          </Pressable>
        </View>

        <View className="mx-3 h-px bg-border" />

        <View className="mt-1">
          <NavItem href="/(tabs)/a" label="Home" Icon={Home} />
          <NavItem href="/(tabs)/b" label="Components" Icon={Layers} />
        </View>

        <View className="mt-auto gap-2 p-3">
          <Pressable
            onPress={toggleTheme}
            className={cn(
              'flex-row items-center rounded-lg border px-3 py-2 outline-none active:opacity-80',
              'border-border',
              colorScheme === 'dark' ? 'bg-input/30' : 'bg-accent/20',
              isCollapsed && 'justify-center px-2',
              'focus-visible:ring-2 focus-visible:ring-ring'
            )}
            accessibilityLabel="Toggle theme"
          >
            {colorScheme === 'dark' ? (
              <>
                <Moon size={16} className="text-foreground" />
                {!isCollapsed && <Text className="ml-2 text-sm text-foreground">Dark</Text>}
              </>
            ) : (
              <>
                <Sun size={16} className="text-foreground" />
                {!isCollapsed && <Text className="ml-2 text-sm text-foreground">Light</Text>}
              </>
            )}
          </Pressable>

          {!isCollapsed && <Text className="text-[11px] text-muted-foreground">v0.1.0</Text>}
        </View>
      </View>
    </Animated.View>
  );
}
