import * as firebase from 'firebase';

export class AuthenticationService {
  token: string;

  signupUser(email: string, passwword: string) {
    firebase.auth().createUserWithEmailAndPassword(email, passwword)
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, passwword: string) {
    firebase.auth().signInWithEmailAndPassword(email, passwword)
      // .then(
      //   response => console.log(response)
      // )
      .then(
        response => {
          firebase.auth().currentUser.getIdToken()
            .then(
            (token: string) => this.token = token
          );
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  getIdToken() {
    firebase.auth().currentUser.getIdToken().then(
      (token: string) => this.token = token
    );
    console.log(this.token);
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }


}
