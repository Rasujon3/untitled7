import React, {Component} from 'react';
import {Text, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dateValue: 'Date',
        };
    }

    onChange = (event, selectedDate) => {
        let timeStamp = selectedDate.getTime();

        let FormatDate = moment(timeStamp).toDate();

        this.setState({dateValue: FormatDate.toString()});
    };

    render() {
        return (
            <View>
                <Text>{this.state.dateValue}</Text>
                <DateTimePicker
                    testID="dateTimePicker"
                    value={new Date()}
                    // mode='time'
                    mode='date'
                    onChange={this.onChange}
                />
            </View>
        );
    }
}

export default App;
