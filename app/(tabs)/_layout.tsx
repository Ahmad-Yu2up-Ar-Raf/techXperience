import { Platform, ColorValue, ImageSourcePropType, Pressable } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { THEME } from '@/lib/theme';
import { Label, NativeTabs, VectorIcon, Icon as TabIcon } from 'expo-router/unstable-native-tabs';
import { View } from '@/components/ui/fragments/shadcn-ui/view';
import { Text } from '@/components/ui/fragments/shadcn-ui/text';
import { useRouter, usePathname } from 'expo-router';
import React, { useMemo } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/fragments/shadcn-ui/button';

type VectorIconFamily = {
  getImageSource: (name: string, size: number, color: ColorValue) => Promise<ImageSourcePropType>;
};

// ✅ BEST PRACTICE: Floating Pay Button with Pressable (direct control)
function FloatingPayButton() {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname.includes('(pay)');

  const handlePress = () => {
    router.push('/(tabs)/(pay)');
  };

  return (
    <Button
      onPress={handlePress}
      style={{
        position: 'absolute',
        bottom: 30, // Position from bottom of screen (adjust based on tab bar height)
        left: '50%', // Center horizontally
        marginLeft: -38, // Half of button width (64/2) to center
        zIndex: 100, // Ensure it's above everything
      }}
      className="size-20 flex-col items-center justify-center gap-1 rounded-full bg-primary shadow-2xl shadow-primary/50 active:scale-95">
      <MaterialCommunityIcons name="qrcode-scan" size={23} color="white" />
      <Text className="relative text-center text-[13px] font-semibold text-primary-foreground">
        Pay
      </Text>
    </Button>
  );
}

// ✅ Proper TypeScript interface without 'any' or 'unknown'
interface NativeTabsConfig extends React.PropsWithChildren {
  backgroundColor: string;
  badgeBackgroundColor: string;
  labelStyle: {
    fontWeight: '700';
    fontSize: number;
    color: string;
  };
  iconColor: string;
  tintColor: string;
  labelVisibilityMode: 'labeled';
  indicatorColor: string;
  disableTransparentOnScrollEdge: boolean;
}

export default function TabsLayout() {
  const tintColor = THEME.light.primary;
  const backgroundColor = THEME.light.card;
  const inactiveTintColor = THEME.light.mutedForeground;
  const borderColor = THEME.light.border;

  const labelSelectedStyle = useMemo(() => ({ color: tintColor }), [tintColor]);

  const nativeLabelStyle = useMemo(
    () => ({
      fontWeight: '700' as const,
      fontSize: 12,
      color: inactiveTintColor,
    }),
    [inactiveTintColor]
  );

  // ✅ Tab bar configuration
  const tabBarConfig = useMemo(
    () => ({
      paddingTop: 8,
      height: 70,
      backgroundColor,
      borderTopWidth: 1,
      borderTopColor: borderColor,
      ...Platform.select({
        android: { elevation: 8 },
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.05,
          shadowRadius: 3,
        },
      }),
    }),
    [backgroundColor, borderColor]
  );

  return (
    <View className="flex-1">
      {/* ✅ NativeTabs - Type assertion for extended props */}
      <NativeTabs
        {...({
          backgroundColor,
          badgeBackgroundColor: tintColor,
          labelStyle: nativeLabelStyle,
          iconColor: inactiveTintColor,
          tintColor,
          labelVisibilityMode: 'labeled',
          indicatorColor: THEME.light.muted,
          disableTransparentOnScrollEdge: true,
          tabBarStyle: tabBarConfig, // This might show TS warning but will work at runtime
        } as NativeTabsConfig & { tabBarStyle: typeof tabBarConfig })}>
        {/* Home Tab */}
        <NativeTabs.Trigger name="(home)/index">
          <TabIcon
            src={<VectorIcon family={MaterialCommunityIcons as VectorIconFamily} name="home" />}
            selectedColor={tintColor}
          />
          <Label selectedStyle={labelSelectedStyle}>Home</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="(history)/index">
          <TabIcon
            src={<VectorIcon family={MaterialCommunityIcons as VectorIconFamily} name="history" />}
            selectedColor={tintColor}
          />
          <Label selectedStyle={labelSelectedStyle}>Activity</Label>
        </NativeTabs.Trigger>

        {/* ✅ Pay Tab - Spacer only (visual handled by FloatingPayButton) */}
        <NativeTabs.Trigger name="(pay)/index">
          <View className="h-12 w-12 opacity-0" />
          <Label hidden>Pay</Label>
        </NativeTabs.Trigger>

        {/* Profile Tab */}
        <NativeTabs.Trigger name="(wallet)/index">
          <TabIcon
            src={<VectorIcon family={MaterialCommunityIcons as VectorIconFamily} name="wallet" />}
            selectedColor={tintColor}
          />
          <Label selectedStyle={labelSelectedStyle}>Wallet</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="(profile)/index">
          <TabIcon
            src={<VectorIcon family={MaterialCommunityIcons as VectorIconFamily} name="account" />}
            selectedColor={tintColor}
          />
          <Label selectedStyle={labelSelectedStyle}>Profile</Label>
        </NativeTabs.Trigger>
      </NativeTabs>

      {/* ✅ Floating Pay Button - Positioned absolutely with inline styles */}
      <FloatingPayButton />
    </View>
  );
}
