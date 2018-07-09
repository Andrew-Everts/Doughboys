import React from 'react';
import { Text, View } from 'react-native';
import { getTodaysSchedule } from 'doughboys-malt/hours';
import { compose, ColorSheet, FlexSheet, SpacingSheet } from '../styles';

const { flex1, itemsCenter, justifyCenter } = FlexSheet;
const { backgroundColor, Colors } = ColorSheet;
const { pb2 } = SpacingSheet;

const Home = () => {
    const schedule = getTodaysSchedule();

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
