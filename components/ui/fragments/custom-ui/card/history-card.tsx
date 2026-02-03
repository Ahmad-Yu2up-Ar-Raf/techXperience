import { Image } from 'react-native';
import React, { SVGProps } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/fragments/shadcn-ui/card';
import { Button, buttonTextVariants, buttonVariants } from '../../shadcn-ui/button';
import { Link } from '../../shadcn-ui/link';
import { Icon } from '../../shadcn-ui/icon';
import {
  Banknote,
  ChevronRight,
  Crosshair,
  Gamepad,
  Gamepad2,
  Goal,
  Grid,
  History,
  LayoutDashboard,
  Lightbulb,
  LucideIcon,
  Phone,
  Target,
  TicketPercent,
  Wallet,
} from 'lucide-react-native';
import { cn } from '@/lib/utils';
import { View } from '../../shadcn-ui/view';
import { Text } from '../../shadcn-ui/text';
import { Href } from 'expo-router';
import Qris from '@/assets/svg/brand/qris';
import { SvgProps } from 'react-native-svg';
import { Separator } from '../../shadcn-ui/separator';

interface HistoryCardProps {
  label: string;
  date: string;
  amount: string;
  status?: 'income' | 'expense';
  Icon: React.ComponentType<SvgProps & SVGProps<SVGSVGElement>>;
}

const HistoryLink: HistoryCardProps[] = [
  {
    label: 'Kopi Pelakor',
    Icon: Qris,
    date: 'Today, 12:45 PM',
    amount: '10.000',
    status: 'expense',
  },
  {
    label: 'Kopi Pelakor',
    Icon: Qris,
    date: 'Today, 12:45 PM',
    amount: '10.000',
    status: 'expense',
  },
  {
    label: 'Kopi Pelakor',
    Icon: Qris,
    date: 'Today, 12:45 PM',
    amount: '10.000',
    status: 'expense',
  },
  {
    label: 'Kopi Pelakor',
    Icon: Qris,
    date: 'Today, 12:45 PM',
    amount: '10.000',
    status: 'expense',
  },
];
export default function HistoryCard() {
  return (
    <Card className="h-fit w-full max-w-sm gap-4 rounded-3xl bg-card px-0 pt-3 pb-6 text-primary-foreground shadow-sm">
      <CardHeader className="w-full flex-row items-center justify-between border-b border-border bg-card px-6 py-2 pr-0 shadow-sm">
        <CardTitle className="p-0 text-xl font-bold tracking-tight">
          <Icon as={History} size={20} className="sr-only inline-block text-foreground" />
          History
        </CardTitle>
        <Link href="/(tabs)/(home)" className={cn(buttonVariants({ variant: 'link' }), 'gap-0')}>
          <View className="flex-row gap-1">
            <Text
              className={cn(
                buttonTextVariants({ variant: 'link', size: 'sm' }),
                'mx-0 p-0 text-xs'
              )}>
              View All
            </Text>
            <Icon as={ChevronRight} size={15} className="mx-0 ml-0 text-primary" />
          </View>
        </Link>
        {/* <View className="flex-row items-center gap-5">
          <Image
            source={require('@/assets/images/reward.png')}
            resizeMode="contain"
            className="size-10"
            // style={LOGO_STYLE}
          />
          <View className="gap-1">
            <CardTitle className="font-semibold">Alipay+ Rewards</CardTitle>
            <CardDescription className="text-[12.5px] tracking-wide text-orange-500">
              Berhadiah 2,5 Jt!
            </CardDescription>
          </View>
        </View> */}
        {/* <Button size={'sm'}>
          <Text className="px-1.5 text-primary-foreground">Claim Now</Text>
        </Button> */}
      </CardHeader>
      <CardContent className="flex flex-col justify-between gap-4 p-0 px-3">
        {HistoryLink.map((item, index) => (
          <>
            <Button
              key={index}
              variant={'ghost'}
              className={cn(
                // buttonVariants({ variant: 'ghost' }),

                'w-full flex-row justify-between px-2 py-0 active:bg-accent'
              )}>
              <View className="h-fit flex-row items-center gap-4">
                <View className="flex h-full w-fit flex-col content-center items-center justify-center rounded-full border border-border p-2.5">
                  <Image
                    source={require('@/assets/images/linkaja-logo.png')}
                    resizeMode="cover"
                    className="m-auto size-5"
                    // style={LOGO_STYLE}
                  />
                </View>
                <View>
                  <Text variant={'h3'}>{item.label}</Text>
                  <Text
                    variant={'small'}
                    className="text-xs tracking-wide text-muted-foreground/50">
                    {item.date}
                  </Text>
                </View>
              </View>
              <Text
                variant={'large'}
                className={cn(item.status === 'income' ? 'text-green-500' : 'text-red-500')}>
                {item.status === 'income' ? '+' : '-'} Rp {item.amount}
              </Text>
            </Button>
            {index !== HistoryLink.length - 1 && <Separator />}
          </>
        ))}
      </CardContent>
    </Card>
  );
}
