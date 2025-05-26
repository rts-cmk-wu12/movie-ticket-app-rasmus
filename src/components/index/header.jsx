import '../../styles/scss/index/header.scss';

function Header() {
    return (
        <>
            <header>
                <div className="profile">
                    <div className='profile__text'>
                        <p>Welcome Back,</p>
                        <h1>Tofter</h1>
                    </div>
                    <img src="https://placehold.jp/100x100.png" alt="" />
                </div>
            </header>
        </>
    );
}

export default Header;