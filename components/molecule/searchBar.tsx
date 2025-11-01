import { cn } from '@/lib/utils';
import { Search } from 'lucide-react-native';
import * as React from 'react';
import { View } from 'react-native';
import { Icon, Input } from '../atom';

type SearchBarProps = React.ComponentPropsWithoutRef<typeof Input>;

const SearchBar = React.forwardRef<React.ElementRef<typeof Input>, SearchBarProps>(
  ({ className, placeholder = 'Search…', ...props }, ref) => {
    return (
      <View className="relative w-full">
        <View
          pointerEvents="none"
          className="absolute inset-y-0 left-3 z-10 flex justify-center"
        >
          <Icon as={Search} className="h-5 w-5 text-muted-foreground" />
        </View>

        <Input
          ref={ref}
          accessibilityRole="search"
          accessibilityLabel="Search"
          placeholder={placeholder}
          autoCapitalize="none"
          returnKeyType="search"
          className={cn('pl-11', className)}
          // if your Input doesn't have a fixed height, uncomment next line:
          // className={cn('h-10 pl-11', className)}
        />
      </View>
    );
  }
);
SearchBar.displayName = 'SearchBar';

export { SearchBar };
