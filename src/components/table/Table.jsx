import React from 'react';
import s from './table.module.scss';
import {useMediaQuery} from "react-responsive";

const TableRow = ({icon, currency, description, period, profit}) => (
    <tr>
        <td>

            <img src={require(`../../assets/${icon}`)} alt={currency} width={73} height={73} draggable={false}/>

        </td>
        <td>
            <span> {currency}</span> <br/>

            {description}
        </td>
        <td>{period}</td>
        <td>{profit}</td>
    </tr>
);


const MobileTableRow = ({icon, currency, period, profit}) => {
    return <div className={s.mobile_table_row}>

        <img src={require(`../../assets/${icon}`)} alt={currency} width={63} height={63} draggable={false}/>

        <div className={s.mobile_table_row_title}>

            <span className={s.currency}>{currency}</span>

            <span className={s.profit}>{profit}</span>

            <span className={s.period}>{period}</span>

        </div>
    </div>
}

const Table = () => {

    const isMobile = useMediaQuery({maxWidth: 375});

    return (
        <div className={s.table_container}>
            {!isMobile ? (
                <>
                    <table>
                        <thead>
                        <tr>
                            <th></th>
                            <th>Idea</th>
                            <th>Period</th>
                            <th>Profit</th>
                        </tr>
                        </thead>
                        <tbody>
                        <TableRow
                            icon="dollar.png"
                            currency="GOLD/USD"
                            description="Discover Proven Strategies for Building Wealth"
                            period="3 months"
                            profit="up to 60%"

                        />

                        <TableRow
                            icon="eu.png"
                            currency="EUR/USD"
                            description="Discover Proven Strategies for Building Wealth"
                            period="3 months"
                            profit="up to 60%"
                        />

                        <TableRow
                            icon="gas.png"
                            currency="Brent/USD"
                            description="Discover Proven Strategies for Building Wealth"
                            period="3 months"
                            profit="up to 60%"

                        />

                        <TableRow
                            icon="sp500.png"
                            currency="Brent/USD"
                            description="Discover Proven Strategies for Building Wealth"
                            period="3 months"
                            profit="up to 60%"

                        />

                        <TableRow
                            icon="dax.png"
                            currency="S&P 500"
                            description="Discover Proven Strategies for Building Wealth"
                            period="3 months"
                            profit="up to 60%"

                        />

                        </tbody>
                    </table>
                </>
            ) : (

                <>

                    <MobileTableRow
                        icon="dollar.png"
                        currency="GOLD/USD"
                        period="2 months"
                        profit="up to 60%"
                    />

                    <MobileTableRow
                        icon="eu.png"
                        currency="EUR/USD"
                        period="3 months"
                        profit="up to 23%"
                    />

                    <MobileTableRow
                        icon="gas.png"
                        currency="Brent/USD"
                        period="2 weeks"
                        profit="up to 15%"

                    />

                    <MobileTableRow
                        icon="sp500.png"
                        currency="Brent/USD"
                        period="6 months"
                        profit="up to 30%"

                    />

                    <MobileTableRow
                        icon="dax.png"
                        currency="S&P 500"
                        period="3 months"
                        profit="up to 40%"

                    />
                </>
            )}
        </div>
    );
};

export default Table;

