import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import App from './App';

describe('App', () => {
    test('renders name', () => {
        render(<App/>);
        const name = screen.getByText(/Dai Weijian/i);
        expect(name).toBeInTheDocument();
    });

    test('refreshes the time when Refresh Time button is clicked', async () => {
        render(<App/>);
        const timeElement = screen.getByText(/:/);
        const refreshButton = screen.getByText(/Refresh Time/i);

        expect(refreshButton).toBeInTheDocument();

        const initialTime = timeElement.textContent;

        await new Promise(resolve => setTimeout(resolve, 2000));
        fireEvent.click(refreshButton);

        await waitFor(() => {
            const updatedTime = timeElement.textContent;
            expect(updatedTime).not.toBe(initialTime);
        });
    });
});

describe('App - Clock Operations', () => {
    test('creates a clock when Create Clock button is clicked', () => {
        render(<App/>);
        const createClockButton = screen.getByText('Create Clock');

        expect(createClockButton).toBeInTheDocument();

        fireEvent.click(createClockButton);

        const newClock = screen.getByTestId('clock-0');
        expect(newClock).toBeInTheDocument();
    });

    test('deletes a clock when Delete Clock button is clicked', () => {
        render(<App/>);
        const createClockButton = screen.getByText('Create Clock');

        fireEvent.click(createClockButton);

        const deleteClockButton = screen.getByText('Delete Clock');
        expect(deleteClockButton).toBeInTheDocument();

        fireEvent.click(deleteClockButton);

        const deletedClock = screen.queryByTestId('clock-0');
        expect(deletedClock).not.toBeInTheDocument();
    });
});