import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import googleIcon from '../assets/svg/googleIcon.svg'

export default function OAuth() {

    const location = useLocation()
    const navigate = useNavigate()
    const onGoogleClick = async () => {
        try {
            const auth = getAuth()
            const provider = new GoogleAuthProvider()
            const { user } = await signInWithPopup(auth, provider)
            const docRef = doc(db, 'users', user.uid)
            const docSnap = await getDoc(docRef)
            if (!docSnap.exists) {
                await setDoc(doc(docSnap, 'users', user.uid), {
                    email: user.email,
                    name: user.displayName,
                    timestamp: serverTimestamp()
                })
            }
            navigate('/')
        } catch (error) {
            toast.error('Could not sign in with Google')
        }
    }

    return (
        <div className='socialLogin'>
            <p>Sign {location.pathname === '/sign-up' ? 'up' : 'in'} with</p>
            <button className='socialIconDiv' onClick={onGoogleClick}>
                <img className='socialIconImg' src={googleIcon} alt='google' />
            </button>
        </div>
    )
}
