import React from 'react'
import { initializeApp } from 'firebase/app';


export default function Authorizer(props) {

    // TODO: Replace the following with your app's Firebase project configuration
    const firebaseConfig = {
        //...
    };
    const app = initializeApp(firebaseConfig);

    const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: 'https://www.example.com/finishSignUp?cartId=1234',
        // This must be true.
        handleCodeInApp: true,
        iOS: {
          bundleId: 'com.example.ios'
        },
        android: {
          packageName: 'com.example.android',
          installApp: true,
          minimumVersion: '12'
        },
        dynamicLinkDomain: 'example.page.link'
      };



    return (
        <div>
            {console.log(app)}
        </div>
    )
}