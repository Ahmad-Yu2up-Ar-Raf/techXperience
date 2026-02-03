import * as React from 'react';
import { View } from '@/components/ui/fragments/shadcn-ui/view';
import StatusCard from '@/components/ui/fragments/custom-ui/card/status-card';
import { Button } from '@/components/ui/fragments/shadcn-ui/button';
import { Text } from '@/components/ui/fragments/shadcn-ui/text';
import { Icon } from '@/components/ui/fragments/shadcn-ui/icon';
import { CircleDollarSign, CircleFadingArrowUp, Coins } from 'lucide-react-native';
import MenuCard from '@/components/ui/fragments/custom-ui/card/menu-card';
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import { Dimensions, ScrollView } from 'react-native';

import HistoryCard from '@/components/ui/fragments/custom-ui/card/history-card';
import { cn } from '@/lib/utils';

export default function Screen() {
  const data = [...new Array(6).keys()];
  const width = Dimensions.get('window').width;

  const { width: screenWidth } = Dimensions.get('window');
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="interactive"
      contentContainerClassName="py-[3em] ">
      <View className="mb-28 flex flex-1 flex-col gap-5">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-3">
          {data.map((_, index) => (
            <StatusCard key={index} className={cn('mr-1.5', index == data.length - 1 && 'mr-8')} />
          ))}
        </ScrollView>

        <View className="flex-1 items-center gap-5 px-4">
          <View className="h-[3em] max-w-sm flex-row items-center justify-center gap-x-2 bg-background px-1 py-0">
            <Button className="h-full w-1/2 gap-2 shadow-sm">
              <Icon as={CircleFadingArrowUp} size={22} className="text-primary-foreground" />
              <Text className="text-[15.5px] font-semibold">Send</Text>
            </Button>
            <Button variant={'outline'} className="h-full w-1/2 gap-2">
              <Icon as={CircleDollarSign} size={22} />
              <Text className="text-[15.5px] font-semibold">Request</Text>
            </Button>
          </View>
          <MenuCard />
          <HistoryCard />
        </View>
      </View>
    </ScrollView>
  );
}
