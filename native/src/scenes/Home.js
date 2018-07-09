import React from 'react';
import { Text, View } from 'react-native';
import { Schedule } from 'doughboys-malt';
import { compose, ColorSheet, FlexSheet, SpacingSheet } from '../styles';

const { flex1, itemsCenter, justifyCenter } = FlexSheet;
const { backgroundColor, Colors } = ColorSheet;
const { pb2 } = SpacingSheet;

const Home = () => {
    const schedule = Schedule.forToday();

    return (
        <View
            style={compose(
                flex1,
                backgroundColor(Colors.White),
                itemsCenter,
                justifyCenter,
            )}>
            <Text style={pb2}>Today's Schedule</Text>
            {schedule.map(({ opensAt, closesAt }, index) => (
                <Text key={`schedule-${index}`}>
                    {opensAt.format('hh:mma')} - {closesAt.format('hh:mma')}
                </Text>
            ))}
        </View>
    );
};

export default Home;
