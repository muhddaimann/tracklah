import '@/global.css';
import { NAV_THEME } from '@/lib/theme';
import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { OverlayProvider } from '@/contexts/overlayContext';
import { AlertHost } from '@/components/molecule/alertDialog';
import { ToastHost } from '@/components/molecule/toast';
import { ModalHost } from '@/components/molecule/modal';
import { Slot } from 'expo-router';

export { ErrorBoundary } from 'expo-router';

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  return (
    <ThemeProvider value={NAV_THEME[colorScheme ?? 'light']}>
      <OverlayProvider>
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
        <Slot />
        <PortalHost />
        <AlertHost />
        <ToastHost />
        <ModalHost />
      </OverlayProvider>
    </ThemeProvider>
  );
}
