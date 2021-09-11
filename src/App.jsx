import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom"

import Home from "./views/Home"
import Server from "./views/Server"
import Discord from "./views/Discord"
import Contacts from "./views/Contacts"

export default function App() {
	return (
		<Router>
			<header>
				<nav>
					<Link className="dreamstar-name" to="/">
						★ DreamStar ★
					</Link>
					<ul>
						<li>
							<Link to="/contacts">Kontakty</Link>
						</li>
						<li>
							<Link to="/server">Server</Link>
						</li>
						<li>
							<Link to="/discord">Discord</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main className="content">
				<Switch>
					<Route path="/contacts">
						<Contacts />
					</Route>
					<Route path="/server">
						<Server />
					</Route>
					<Route path="/discord">
						<Discord />
					</Route>
					<Route path="*">
						<Home />
					</Route>
				</Switch>
			</main>
		</Router>
	)
}
