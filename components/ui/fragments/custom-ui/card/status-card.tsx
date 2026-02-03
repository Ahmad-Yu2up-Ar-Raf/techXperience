import React from 'react';
import { View } from '../../shadcn-ui/view';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/fragments/shadcn-ui/card';
import { Button } from '../../shadcn-ui/button';
import { Text } from '../../shadcn-ui/text';
import { Icon } from '../../shadcn-ui/icon';
import { Copy, Plus } from 'lucide-react-native';
import { Image } from 'react-native';
import { cn } from '@/lib/utils';

export type componentProps = {
  className?: string;
  primaryColor?: 'default' | 'orange' | 'green';
  title?: string;
  subTitle?: string;
  actionButton?: React.ReactNode;
  Logo?: React.ReactNode;
  clipboardText?: string;
};

const actionButtonDefault = (
  <Button size={'sm'} variant="secondary" className="h-[38px] gap-1.5 px-[18px]">
    <Icon as={Plus} size={18} className="text-primary" />
    <Text className="text-sm text-primary">Top Up</Text>
  </Button>
);

export const THEME = {
  default: {
    text: 'text-primary-foreground',
    background: 'bg-primary',
    border: 'border-primary',
    fill: 'fill-primary',
    foreground: 'text-primary-foreground',
  },

  green: {
    text: 'text-green-foreground',
    background: 'bg-green',
    border: 'border-green',
    fill: 'fill-green',
    foreground: 'text-green-foreground',
  },
  orange: {
    text: 'text-orange-foreground',
    background: 'bg-orange',
    border: 'border-orange',
    fill: 'fill-orange',
    foreground: 'text-orange-foreground',
  },

  // ✅ REMOVED: dark theme object - No longer needed
};

const StatusCard = ({
  title = 'Rp 238.420',
  subTitle = 'Your Balance',
  primaryColor = 'default',
  actionButton = actionButtonDefault,
  clipboardText = '5213 123 5678',
  Logo = (
    <Image
      source={require('@/assets/images/logo-white.png')}
      resizeMode="contain"
      className={cn('size-10')}
      // style={LOGO_STYLE}
    />
  ),
  ...props
}: componentProps) => {
  return (
    <Card
      className={cn(
        'h-fit w-full max-w-[22.6em] gap-5 rounded-b-none rounded-t-3xl p-3.5',
        THEME[primaryColor].background,
        THEME[primaryColor].text,
        props.className
      )}>
      <CardHeader className="w-full flex-row items-center justify-between p-0">
        {Logo}

        {clipboardText && (
          <View className="flex flex-row items-center gap-2">
            <Text
              className={cn(
                'text-sm font-medium leading-none tracking-tight',
                THEME[primaryColor].foreground
              )}>
              {clipboardText}
            </Text>
            <Button
              variant="secondary"
              size={'sm'}
              className="relative flex h-fit w-fit justify-center rounded-[4px] p-[4.5px]">
              <View
                className={cn(
                  'relative -left-0.5 top-0.5 z-20 size-2.5 rounded-[3px] border border-background',
                  THEME[primaryColor].background,
                  THEME[primaryColor].fill
                )}
                style={{
                  backgroundColor: '#108bea',
                }}
              />
              <View
                className={cn(
                  'absolute bottom-[7px] right-[3.5px] z-10 size-2 rounded-[2px]',
                  THEME[primaryColor].background,
                  THEME[primaryColor].fill
                )}
                style={{
                  backgroundColor: '#108bea',
                }}
              />
              {/* <Icon as={Copy} size={12} className="text-primary" /> */}
            </Button>
          </View>
        )}
      </CardHeader>
      <CardContent>
        <View className="w-full justify-center gap-4"></View>
      </CardContent>
      <CardFooter className="flex-row items-end p-0">
        <View className="flex-1 gap-0.5">
          <CardDescription
            className={cn('text-[15px] font-light tracking-wide', THEME[primaryColor].foreground)}>
            {subTitle}
          </CardDescription>
          <CardTitle className={cn('text-[31px]', THEME[primaryColor].foreground)}>
            {title}
          </CardTitle>
        </View>
        {actionButton}
      </CardFooter>
    </Card>
  );
};

export default StatusCard;
