import classnames from "classnames"
import Masonry from "react-masonry-component"
import FeaturedImage from ".././components/FeaturedImage"
import Title from ".././components/Title"
import Meta from ".././components/Meta"
import Excerpt from ".././components/Excerpt"
import Button from ".././components/Button"

class Blog extends React.Component {

	render() {

		const { attributes, className, latestPosts, block_id, categoriesList } = this.props

		const {
			columns,
			tcolumns,
			mcolumns,
			imgPosition,
			postsToShow,
		} = attributes

		// Removing posts from display should be instant.
		const displayPosts = latestPosts.length > postsToShow ?
			latestPosts.slice( 0, postsToShow ) :
			latestPosts


		return (

			<div
				className={ classnames(
					className,
					"uagb-post-grid",
					"uagb-post__arrow-outside",
					`uagb-post__image-position-${ imgPosition }`
				) }
				data-blog-id={block_id}
				id={ `uagb-post__masonry-${ block_id }` }
			>
				<Masonry
					className={ classnames(
						"is-masonry",
						`uagb-post__columns-${ columns }`,
						`uagb-post__columns-tablet-${ tcolumns }`,
						`uagb-post__columns-mobile-${ mcolumns }`,
						"uagb-post__items"
					) }
				>
					{ displayPosts.map( ( post, i ) =>
						<article key={ i }>
							<div className="uagb-post__inner-wrap">
								<FeaturedImage post={post} attributes={attributes} />

								<div className="uagb-post__text">
									<Title post={post} attributes={attributes} />
									<Meta post={post} attributes={attributes} categoriesList={categoriesList} />
									<Excerpt post={post} attributes={attributes} />
									<Button post={post} attributes={attributes} />
								</div>
							</div>
						</article>
					) }
				</Masonry>
			</div>
		)
	}
}

export default Blog
