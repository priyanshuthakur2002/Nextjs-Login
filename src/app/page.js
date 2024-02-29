"use client"
// import { signOut, useSession } from "next-auth/react";
// import styles from './page.module.css'; // Import CSS module

// export default function Home() {
//   const { data: session, status } = useSession();
//   if (status !== "authenticated") {
//     return <div>You are not signed in...</div>;
//   }

//   return (
//     <div className={styles.homeContainer}>
//       <div className={styles.wrapper}>
//         <h2 className={styles.heading}>Welcome, {session.user.name}</h2>
//         <hr className={styles.hrLine} />
//         <p className={styles.paragraph}>Email: {session.user.email}</p>
//         <button className={styles.btn} onClick={() => signOut()}>Sign out</button>
//       </div>
//     </div>
//   );
// }

import { signIn, signOut, useSession } from "next-auth/react";
import styles from './page.module.css'; // Import CSS module
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  };

  const handleLogout = () => {
    signOut();
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.wrapper}>
        {status !== "authenticated" ? (
          <>
            <h2 className={styles.heading}>Welcome to our website</h2>
            <hr className={styles.hrLine} />
            <p className={styles.paragraph}>Please sign in or create an account to continue.</p>
            <button className={styles.btn} onClick={handleLogin}>Sign In / Sign Up</button>
          </>
        ) : (
          <>
            <h2 className={styles.heading}>Welcome, {session.user.name}</h2>
            <hr className={styles.hrLine} />
            <p className={styles.paragraph}>Email: {session.user.email}</p>
            <button className={styles.btn} onClick={handleLogout}>Sign out</button>
          </>
        )}
      </div>
    </div>
  );
}


