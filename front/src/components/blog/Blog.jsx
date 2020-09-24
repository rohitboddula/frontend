import React, { Component } from "react";
import Article from "./Article";

import "../../CSS/blog/Blog.css";

class Blog extends Component {
	state = {
		articles: [
			{
				id: 1,
				title: "Preserved Lemons",
				thumb: "lemon.jpg",
				meta: "MICHELLE LIV ∙ NOVEMBER 1, 2015",
				detailed: {
					image: "lemon-big.jpg",
					text:
						"Sed semper lacus non quam placerat volutpat. Donec laoreet velit vitae diam porttitor rhoncus at a nunc. Quisque facilisis magna eget tempor facilisis. Quisque ut risus eget enim gravida vulputate eu eget nulla. Aliquam turpis ligula, lacinia ac elit ac, scelerisque scelerisque sem. Donec hendrerit tempor lacus finibus scelerisque. Sed vitae lacus congue, auctor massa nec, faucibus nisl. Phasellus auctor mattis nibh. Vestibulum porttitor facilisis ullamcorper. Proin sit amet semper mauris. Suspendisse lacinia in lorem at blandit. Morbi tempus tortor vitae diam condimentum, quis aliquet dui congue. Proin fermentum turpis nisl, in posuere est dapibus sit amet.Vivamus mollis sed arcu at consequat.Fusce ut massa quis diam dignissim ornare at a arcu.In posuere porta massa, eget maximus sem feugiat eu.Nulla facilisi.Pellentesque sit amet semper mi.Praesent ac porttitor nunc, eu rutrum ligula.Praesent tincidunt justo vel laoreet imperdiet.Pellentesque viverra bibendum facilisis.Suspendisse purus ante, volutpat id aliquet tristique, iaculis vitae justo.Nulla posuere orci in ante vehicula accumsan.In sed nulla ipsum.Integer aliquam purus nec elit luctus vulputate.",
				},
			},
			{
				id: 2,
				title: "Behind the Brine",
				thumb: "bottles.jpg",
				meta: "MICHELLE LIV ∙ OCTOMBER 15, 2015",
				detailed: {
					image: "bottles.jpg",
					text:
						"In laoreet imperdiet metus, pharetra consectetur velit porta quis. Nam non libero sem. Morbi justo nulla, sagittis a mauris eget, bibendum mollis nunc. Praesent rutrum nunc tincidunt pellentesque volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent tempus, turpis non dictum ullamcorper, quam nisl facilisis lectus, nec bibendum massa velit bibendum tortor. Pellentesque pharetra aliquam neque, id auctor lorem cursus at. Aliquam pharetra blandit pretium. Donec quis arcu in purus sagittis maximus eget in dui. Fusce maximus finibus odio ac scelerisque. Nam sagittis metus at lacus iaculis, ut dictum enim blandit. Sed eu mi non odio finibus dignissim ac non massa. Sed eu odio malesuada, ultrices tortor volutpat, facilisis erat. Fusce tincidunt eleifend ligula sit amet gravida. Maecenas vel bibendum turpis.",
				},
			},
			{
				id: 3,
				title: "Beet Season",
				thumb: "vegetable.jpg",
				meta: "MICHELLE LIV ∙ OCTOMBER 15, 2015",
				detailed: {
					image: "vegetable-big.jpg",
					text:
						"Duis ornare placerat molestie. Etiam volutpat nisl quis leo tincidunt, a hendrerit felis convallis. Sed tempus orci id faucibus auctor. Morbi consequat nulla quis volutpat varius. Integer id placerat metus. Etiam quis felis nec lorem vehicula pellentesque. Ut vitae venenatis dolor. Proin condimentum massa sit amet augue laoreet, vel tincidunt nunc elementum. Sed feugiat faucibus libero sed blandit. Vivamus molestie, odio nec lobortis dignissim, augue elit sodales elit, nec mattis velit massa eget augue. Proin eleifend nisi ut mi aliquet rutrum. Nulla et luctus massa, quis maximus ligula. Donec vitae cursus lectus. Etiam viverra velit at dolor vehicula vehicula.  Fusce vestibulum nulla at lorem venenatis, vel porta mauris ultricies. Sed tempor ipsum eros, sit amet euismod est sollicitudin at. Curabitur eu erat non nisi semper mollis ac et orci. Fusce vel eros id turpis posuere placerat. Vestibulum at aliquam lorem, sed egestas urna. Cras sed volutpat elit. Vivamus nunc purus, ullamcorper in condimentum quis, pellentesque at ipsum. Aliquam suscipit dolor vitae velit pellentesque volutpat. Nam vel tempus nunc. Curabitur orci neque, vestibulum non ipsum sit amet, pretium fermentum eros. Fusce elit metus, tempus et nisi eget, viverra dapibus libero. Vestibulum rhoncus eros nunc, ac molestie dui fringilla sit amet.",
				},
			},
			{
				id: 4,
				title: "Banh Mi + Do Chua",
				thumb: "wrap.jpg",
				meta: "MICHELLE LIV ∙ SEPTEMBER 30, 2015",
				detailed: {
					image: "wrap1.jpg",
					text:
						"Phasellus eget lacinia nisl. Nullam lorem lacus, mollis vitae ligula quis, imperdiet imperdiet purus. Phasellus tempor metus in lorem rhoncus, eget pellentesque lectus interdum. Aenean pellentesque, est et vehicula posuere, ligula tellus lobortis tellus, at convallis orci elit at nunc. Pellentesque semper tortor vitae mi feugiat, sit amet volutpat lorem luctus. Quisque pharetra enim sit amet varius accumsan. Vivamus finibus vitae sapien ac efficitur. Donec non eros sed lorem laoreet tincidunt. Quisque id dolor luctus, ornare quam eu, maximus diam. Cras non iaculis ex. Morbi euismod faucibus commodo. Nullam vitae pellentesque dolor. Integer ornare, elit ac tristique imperdiet, arcu massa convallis nunc, vulputate vestibulum tellus velit non mauris. Mauris non dolor nulla. Cras est nulla, varius vitae bibendum sed, pharetra non turpis. Nunc id sollicitudin odio, nec blandit massa.",
				},
			},
			{
				id: 5,
				title: "Cabbage",
				thumb: "sprout.jpg",
				meta: "MICHELLE LIV ∙ SEPTEMBER 14, 2015",
				detailed: {
					image: "sprout.jpg",
					text:
						"Nulla volutpat, erat ac blandit imperdiet, est lacus egestas ex, sit amet lacinia risus ante a lorem. Ut elementum, velit non luctus aliquam, nibh odio molestie lectus, id faucibus felis augue id mauris. Sed porta posuere fringilla. Donec feugiat risus sit amet tortor venenatis, non venenatis nisl bibendum. Etiam at mauris augue. Donec tempus ex a feugiat eleifend. Nulla facilisi. Quisque non tincidunt est. Sed sed gravida sem. Pellentesque sed ipsum dolor. Vestibulum tempus semper libero vitae fermentum. Proin ultrices accumsan enim sed aliquam. In at ipsum turpis. Sed sit amet ligula vel est dapibus accumsan ut vel libero. Proin placerat nunc non ex aliquet dapibus. Aliquam ut ex justo. Curabitur hendrerit justo eu purus pharetra, eu posuere dolor rhoncus. Curabitur eu vulputate velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur aliquet ullamcorper porttitor. Aenean venenatis mattis sodales. Sed viverra nunc ac purus vulputate tincidunt. Suspendisse potenti. Morbi laoreet sem vitae dictum egestas. Ut a consectetur ligula, at mattis tortor. Maecenas cursus porta felis, quis egestas tellus elementum nec. Proin vitae orci quis mauris dictum lacinia id ut nibh. Proin dictum malesuada nunc, nec tempor est pulvinar ut. Morbi fringilla sodales pulvinar. Etiam eu orci a neque eleifend egestas sit amet eget eros.",
				},
			},
			{
				id: 6,
				title: "Classic Dill",
				thumb: "cucember.jpg",
				meta: "MICHELLE LIV ∙ MAY 19, 2015",
				detailed: {
					image: "cucumbers-big.jpg",
					text:
						"Praesent sit amet elementum sapien, non sollicitudin nunc. Aenean tincidunt eu massa vel convallis. Nam vitae purus tristique, dapibus justo vel, ultrices sapien. Curabitur congue ultrices ligula, quis fringilla justo tincidunt ultrices. Nullam ac quam sapien. Fusce et mauris et sapien elementum pellentesque sit amet ac felis. Praesent fermentum dui non est maximus efficitur. Sed efficitur sit amet ligula id molestie. Cras sodales ex eu ante efficitur, in mollis turpis bibendum. In mollis orci ut lorem lobortis blandit. Proin eget odio nec augue semper aliquet. In metus ex, imperdiet nec ornare at, ornare vel mi. Cras elementum gravida nunc, at feugiat eros interdum non. Curabitur vel leo sed diam consectetur convallis. Sed tempus pretium augue, sodales maximus enim porta eu. Donec egestas neque quis molestie tincidunt. Donec posuere faucibus libero, vel malesuada est egestas quis. Vestibulum ante dolor, bibendum faucibus blandit id, tristique a leo. Suspendisse ligula lorem, rhoncus id ultrices at, ornare eu metus. Nullam porttitor varius posuere. Mauris pellentesque augue urna, lacinia efficitur felis varius sit amet. Suspendisse commodo felis sit amet risus auctor, sagittis lacinia sapien finibus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras pharetra ligula vitae odio eleifend suscipit. Vivamus ut libero dictum, mollis augue nec, ullamcorper leo. Duis a justo ut mi elementum accumsan. Integer ante turpis, pulvinar et eleifend ut, placerat non odio. Maecenas porttitor, est in molestie porta, ligula ex vestibulum nisi, quis aliquam lectus quam non lib",
				},
			},
			{
				id: 7,
				title: "Bratwurst + Sauerkraut Soup",
				thumb: "soup.jpg",
				meta: "MICHELLE LIV ∙ FEBRUARY 10, 2015",
				detailed: {
					image: "soup-big.jpg",
					text:
						"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.Aenean volutpat venenatis sem nec posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur fermentum quis velit non posuere. Maecenas vestibulum auctor sapien id elementum. Sed eget dui nulla. Ut bibendum ultrices tincidunt. Donec at tempus purus!",
				},
			},
			{
				id: 8,
				title: "Red Hot",
				thumb: "pepper.jpg",
				meta: "MICHELLE LIV ∙ NOVEMBER 1, 2015",
				detailed: {
					image: "peppers-big.jpg",
					text:
						"Nulla volutpat, erat ac blandit imperdiet, est lacus egestas ex, sit amet lacinia risus ante a lorem. Ut elementum, velit non luctus aliquam, nibh odio molestie lectus, id faucibus felis augue id mauris. Sed porta posuere fringilla. Donec feugiat risus sit amet tortor venenatis, non venenatis nisl bibendum. Etiam at mauris augue. Donec tempus ex a feugiat eleifend. Nulla facilisi. Quisque non tincidunt est. Sed sed gravida sem. Pellentesque sed ipsum dolor. Vestibulum tempus semper libero vitae fermentum. Proin ultrices accumsan enim sed aliquam. In at ipsum turpis. Sed sit amet ligula vel est dapibus accumsan ut vel libero.Proin placerat nunc non ex aliquet dapibus. Aliquam ut ex justo. Curabitur hendrerit justo eu purus pharetra, eu posuere dolor rhoncus. Curabitur eu vulputate velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur aliquet ullamcorper porttitor. Aenean venenatis mattis sodales. Sed viverra nunc ac purus vulputate tincidunt. Suspendisse potenti. Morbi laoreet sem vitae dictum egestas. Ut a consectetur ligula, at mattis tortor. Maecenas cursus porta felis, quis egestas tellus elementum nec. Proin vitae orci quis mauris dictum lacinia id ut nibh. Proin dictum malesuada nunc, nec tempor est pulvinar ut. Morbi fringilla sodales pulvinar. Etiam eu orci a neque eleifend egestas sit amet eget eros.",
				},
			},
		],
	};

	detailedHandler = (id) => {
		this.props.history.push({
			pathname: "article",
			search: "?id=" + id,
		});
	};

	render() {
		const articles = {
			...this.state.articles,
		};

		const article = Object.keys(articles).map((cur, index) => {
			return (
				<Article
					key={index}
					imageName={articles[cur].thumb}
					title={articles[cur].title}
					meta={articles[cur].meta}
					clicked={() => this.detailedHandler(articles[cur].id)}
					detailed={articles[cur].detailed}
				/>
			);
		});

		return (
			<>
				<main className="blog-main">
					<section className="blog">{article}</section>
				</main>
			</>
		);
	}
}

export default Blog;
