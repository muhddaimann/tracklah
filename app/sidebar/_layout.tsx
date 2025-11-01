import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { Slot } from 'expo-router';
import { Sidebar } from '@/components/molecule/sidebar';
import { SidebarProvider } from '@/contexts/sidebarContext';

export default function TabsLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SidebarProvider>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Sidebar />
          <View style={{ flex: 1 }}>
            <Slot />
          </View>
        </View>
      </SidebarProvider>
    </SafeAreaView>
  );
}
