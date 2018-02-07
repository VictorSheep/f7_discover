import Framework7 from 'framework7';
import $ from 'jquery';
import {foo} from './foo';


foo("Hello Babel");
//console.log("Hello Node");

/* Framework7 */
const app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
    	name: 'about',
      path: '/about/',
      url: 'about.html',
    },
    {
      name: 'games-list',
      path: '/games-list/',
      templateUrl: './views/games-list.html',
      options: {
        context: {
          games: ['Kirby', 'TrakMania', 'Compote Adventures'],
        },
      },
      on: {
        pageAfterIn: function (e, page) {
          // do something after page gets into the view
        },
        pageInit: function (e, page) {
          // do something when page initialized

          let games = [
            {
              name: 'Kirby',
              date: '1995',
              note: 8
            },{
              name: 'TrakMania',
              date: '1998',
              note: 7
            },{
              name: 'Compote Adventures',
              date: '2007',
              note: 10
            }
          ]

          $(document).ready(()=>{

            var $div = $(".view .page-content ul#games-list")
            console.log('$', $div)


          for (var i = 0; i < games.length; i++) {
            let g = games[i]
            let divg = document.createElement('li')
            divg.className = 'game' + i
            divg.innerHTML =`
              <h5 class="title">${g.name}</h5>
              <a class="button">
                <i class="f7-icons ios-only">arrow_right</i>
                <i class="material-icons md-only">arrow_next</i>
              </a>
            `
            $div.append(divg)
          }

          })

        },
      }
    },
    {
    	name: 'game',
    	path: '/game/',
    	templateUrl: './views/game.html/',
    	options: {
    		context: {
    			gameId: 0
    		}
    	}
    },
    {
    	name: 'config',
    	path: '/config/',
    	templateUrl: './views/config.html'
    },
    {
      path: '(.*)',
      url: './pages/404.html',
    }
  ],
  // ... other parameters
});

let mainView = app.views.create('.view-main');
let aboutView = app.views.create('.view-about');
let gamesListView = app.views.create('.games-list');