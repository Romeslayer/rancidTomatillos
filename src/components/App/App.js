import React { Components } from 'react'

class App extends Component {
     constructor() {
          super();
          this.state = {
               movies: [],
               displayed: []
          }
     }

      filter = () => {

     }

     render() {
          return(
               <main className='App'>
               <Header filter={this.filter} />
               <Main />
               </main>

          )
     }
}