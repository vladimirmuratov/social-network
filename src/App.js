import React, {useEffect, useState} from 'react'
import Header from 'components/header'
import Content from 'components/content'
import {ContextIsAuth} from 'components/context'
import {ContextUserId} from 'components/context'
import {ContextSound} from 'components/context'

const App = () => {
    const [isAuth, setIsAuth] = useState(false)
    const [userId, setUserId] = useState(null)
    const [isSound, setIsSound] = useState(false)

    // console.log('isAuth', isAuth)
    // console.log('userId', userId)
    // console.log('userIsLogged', localStorage.getItem("userIsLogged"))

    useEffect(() => {
        if(localStorage.getItem("userIsLogged") === 'true') {
            setIsAuth(true)
        }
        if((localStorage.getItem("userId") !== 'null')){
            setUserId(Number(localStorage.getItem("userId")))
        }
    }, [])

    return (
        <ContextUserId.Provider value={[userId, setUserId]}>
            <ContextIsAuth.Provider value={[isAuth, setIsAuth]}>
                <ContextSound.Provider value={[isSound, setIsSound]}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <Header/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <Content/>
                            </div>
                        </div>
                    </div>
                </ContextSound.Provider>
            </ContextIsAuth.Provider>
        </ContextUserId.Provider>
    );
}

export default App;
