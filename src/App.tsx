import { Card } from "./components/Card"
import { BLOG_ITEM } from "./data/blog"

export const App = () => {
	return (
		<div className="w-screen h-screen flex justify-center items-center bg-Yellow">
			<Card blog={BLOG_ITEM} />
		</div>
	)
}
