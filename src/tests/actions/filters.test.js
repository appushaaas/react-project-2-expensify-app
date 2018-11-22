
import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';


test('Should create an object for setStartDate action', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Should create an object for setEndDate action', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});


test('Should generate a setTextFilter object for a provided text', () => {
    const text = 'Something in'; 
    const action = setTextFilter(text);
    expect(action).toEqual({
           type: 'SET_TEXT_FILTER',
           text
    });
});


test('Should generate a setTextFilter object for a default text', () => { 
    const action = setTextFilter();
    expect(action).toEqual({
           type: 'SET_TEXT_FILTER',
           text: ''
    });
});


test('Should create an object for sortByAmount', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT'});
});

test('Should create an object for sortByDate', () => {
    expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'});
    
});