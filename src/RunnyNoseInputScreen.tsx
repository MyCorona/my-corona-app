import React, {FC} from 'react';
import {Background} from './components/Background';
import {StackNavigationProp} from '@react-navigation/stack';
import {Icon, Icons} from './lib/icons';
import {NavigationHeader} from './NavigationHeader';
import {StyleSheet, View} from 'react-native';
import {Colors} from './lib/colors';
import {fontName} from './lib/vars';
import {DoneButton} from './components/DoneButton';
import {SelectionGroup} from './components/SelectionGroup';
import {FancyGradientChart} from './FancyGradientChart';
import {createDataPoint, getGraphDate} from './DetailedReportScreen';
import {Divider} from './components/Divider';
import {TrackMySymptomHeader} from './components/TrackMySymtomHeader';
import {RootStackParamList} from '../App';
import {RouteProp} from '@react-navigation/native';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'RunnyNose'>;
  route: RouteProp<RootStackParamList, 'RunnyNose'>;
};

export const RunnyNoseInputScreen: FC<Props> = ({route}) => {
  return (
    <Background>
      <NavigationHeader
        center={<TrackMySymptomHeader symptomName="runny nose" />}
        showBackButton
      />
      <View style={{flexDirection: 'row'}}>
        <Icon style={styles.emojiStyle} source={Icons.Sneezing} />
        <FancyGradientChart
          data={[
            createDataPoint(getGraphDate(24), 1),
            createDataPoint(getGraphDate(25), 1),
            createDataPoint(getGraphDate(26), 2),
            createDataPoint(getGraphDate(27), 2),
            createDataPoint(getGraphDate(28), 3),
          ]}
        />
      </View>
      <SelectionGroup
        title="do you have a runny nose?"
        onOptionSelected={() => {}}
        options={[
          {title: 'yes', color: '#FF7A7A'},
          {title: 'no', color: '#8cf081'},
        ]}
      />
      <Divider />
      <SelectionGroup
        title="frequency"
        onOptionSelected={() => {}}
        options={[
          {title: 'not often'},
          {title: 'often'},
          {title: 'very often'},
        ]}
      />
      <View style={styles.center}>
        <DoneButton style={{marginTop: 50}} onPress={() => {}} />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  tempInputContainer: {
    width: 170,
    height: 170,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: Colors.buttonBorder,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  tempInputText: {
    color: 'white',
    fontFamily: fontName,
    fontWeight: '500',
    fontSize: 48,
    lineHeight: 61,
  },
  center: {
    width: '100%',
    alignItems: 'center',
  },
  emojiStyle: {
    position: 'absolute',
    bottom: '30%',
  },
});
