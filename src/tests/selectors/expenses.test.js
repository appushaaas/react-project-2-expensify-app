import selectExpenses from '../../selectors/expenses';
import moment from 'moment';


const expenses = [{
    id: 1,
    description: 'Gum',
    amount: 24000,
    createdAt: 0,
    note: ''
},{
    id: 2,
    description: 'Home',
    amount: 25000,
    createdAt: moment(0).add(4,'days').valueOf(),
    note: ''
},{
    id: 2,
    description: 'Home',
    amount: 25000,
    createdAt: moment(0).add(4,'days').valueOf(),
    note: ''
}]

test('Should test for filter by text', () => {
    const filters = {
       text: 'e',
       sortBy: 'date',
       startDate: undefined,
       endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2]]);
});

test('Should test for filter by startDate', () => {
    const filters = {
       text: 'H',
       sortBy: 'date',
       startDate: moment(0),
       endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2]]);
});

test('Should test for filter by endDate', () => {
    const filters = {
       text: 'm',
       sortBy: 'date',
       startDate: undefined,
       endDate: moment(0).add(2, 'days')
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
});

test('Should test for filter by date', () => {
    const filters = {
       text: '',
       sortBy: 'date',
       startDate: undefined,
       endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});

test('Should test for filter by amount', () => {
    const filters = {
       text: '',
       sortBy: 'amount',
       startDate: undefined,
       endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});