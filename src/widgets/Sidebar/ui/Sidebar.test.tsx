import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Sidebar', () => {
    test('render', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('is collapsed on render', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });

    test('is not collapsed when button pressed', () => {
        componentRender(<Sidebar />);

        const button = screen.getByTestId('sidebar-button');

        fireEvent.click(button);

        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});
