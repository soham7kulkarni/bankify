import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {

    const loggedIn = { firstName: "Soham", lastName: "Kulkarni", email: "sohamkulkarni1210@gmail.com"};
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                type = "greeting"
                title = "Welcome"
                user = {loggedIn?.firstName || 'Guest'}
                subtext = "Access and manage your account and transactions efficiently"
                />

                <TotalBalanceBox
                accounts = {[]}
                totalBanks={1}
                totalCurrentBalance={1245.50} />
            </header>

            RECENT TRANSACTIONS
        </div>
            <RightSidebar
            user = {loggedIn}
            transactions = {[]}
            banks = {[{ currentBalance: 125.50 }, { currentBalance: 125.50}]} />
    </section>
  )
}

export default Home