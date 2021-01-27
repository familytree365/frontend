export default function ({ store, redirect }) {
      if(!store.state.auth.user.email_verified_at) {
          return redirect('/emailverification');
      }
  }