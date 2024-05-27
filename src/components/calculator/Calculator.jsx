import { useState } from 'react';
import Button from './Button';
import '../../styles/calculator/Calculator.css';

const Calculator = () => {
    const [currentValue, setCurrentValue] = useState('0');
    const [previousValue, setPreviousValue] = useState('');
    const [operator, setOperator] = useState('');
    const [currentResult, setCurrentResult] = useState('');
    const [lastValue, setLastValue] = useState('');
    const [evaluated, setEvaluated] = useState(false);

    const handleButtonClick = (value) => {
        if (value === 'C') {
            setCurrentValue('0');
            setPreviousValue('');
            setOperator('');
            setCurrentResult('');
            setEvaluated(false);
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (['+', '-', '*', '/'].includes(lastValue)) return
            if (operator && currentValue) {
                const expression = `${previousValue}${operator}${currentValue}`;
                setPreviousValue(expression);
            } else {
                setPreviousValue(currentValue);
            }
            setOperator(value);
            setCurrentValue('');
        } else if (value === '=') {
            if (operator && currentValue) {
                const result = eval(`${previousValue}${operator}${currentValue}`);
                setCurrentValue(result.toString());
                setPreviousValue('');
                setOperator('');
                setCurrentResult('');
                setEvaluated(true);
            }
        } else {
            const resetValue = currentValue === '0' || evaluated === true;
            if (resetValue) setEvaluated(false);
            const newValue = resetValue ? value : currentValue + value;
            setCurrentValue(newValue);
            if (operator) {
                const newResult = eval(`${previousValue}${operator}${newValue}`);
                setCurrentResult(newResult.toString());
            }
        }
        setLastValue(value);
    };

    const renderButtons = () => {
        const buttons = [
            '1', '2', '3', '+',
            '4', '5', '6', '-',
            '7', '8', '9', '*',
            '0', '=', '/', 'C'
        ];
        return buttons.map((btn) => (
            <Button key={btn} value={btn} onClick={() => handleButtonClick(btn)} />
        ));
    };

    return (
        <div className="calculator">
            <input type="text" value={`${previousValue}${operator}${currentValue}`} readOnly />
            <input type="text" value={currentResult} readOnly />
            <div className="buttons">
                {renderButtons()}
            </div>
        </div>
    );
};

export default Calculator;
