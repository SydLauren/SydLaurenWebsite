export const post2 = `	
<p>In my original blog post, I mentioned wanting to be able to to view earlier versions of my website so that I could look back and see how the site has evolved and (hopefully) how much progress I&#x27;ve made. I&#x27;m calling this the time machine feature. </p><h1>Trouble in Paradise</h1><p>To get this feature to work, I needed some way of preserving the code for each version. There&#x27;s a couple ways I could go about this, for example I could keep a long-living branch for each version, or I could just fork the repository every time I wanted to work on a new version. The problem with this is that I need every version to be served up in one deployment so I could switch between them with a button. </p><p>My first solution to this was for each component to take a version number as a prop, and choose which version of the component to serve up based on that. This way I could make versions granular to a component level, and still get the effect of switching between site versions. This looked something like this: </p><pre><code>import CoolComponentV1 from &#x27;./v1/coolComponent&#x27;;
import CoolComponentV2 from &#x27;./v2/coolComponent&#x27;;

const MyCoolComponent = ({ version }) =&gt; {
	let MyCoolComponentVersion;
	switch(version) {
		case(&#x27;v1&#x27;):
			MyCoolComponentVersion = &lt;CoolComponentV1 /&gt;;
			break;
		case(&#x27;v2&#x27;):
			MyCoolComponentVersion = &lt;CoolComponentV2 /&gt;;
			break;
		default:
			MyCoolComponentVersion = &lt;p&gt;Ah Boogers...&lt;/p&gt;;
	}

	return MyCoolComponentVersion;
}

export default MyCoolComponent;</code></pre><p>
</p><p>As you may have already guessed, even with only two versions, this was quickly becoming a nightmare. This method means that for every component, I had to create this switch statement to export it, and for every new version, I would need to add a new case to every component&#x27;s switch statement. This is definitely not what I want. This side project is meant to be fun, not a doom hole full of maintenance suffering.</p><h1>Trying Something Else Entirely</h1><p>Ideally, I could keep my source code a playground of happiness, and fully manage the version deployments from Firebase. Firebase is currently hosting my website, and hopefully as I go I can build things that integrate more firebase features, such as the realtime database. But that&#x27;s for later, for now I gotta figure out this time machine business. </p><p>Firebase keeps a history of your deployments, so that seems promising... except no, actually not. That history is meant for you to rollback on in case a recent deployment has a bug. So even if I was able to hook up a button in the website to &quot;rollback&quot; to a different deployment version, it would change it for everyone looking at the site. Definitely not what I want.</p><p>Firebase also does multisite hosting for a single project. This also seems promising, except unless I want to buy a new custom domain for each version site, I would be stuck with the <code>-firebase.web.app</code> suffix on each version url. I could maybe live with that, but what&#x27;s even worse is that there&#x27;s a 30 site limit on this feature. Now who knows how long I&#x27;ll keep this up for anyways, but I&#x27;d certainly not like to have a dead-end built in from the start.</p><h1>Back to the Code</h1><p>Ok, so it seems there&#x27;s no great solution outside of the source code for managing different deployment versions. At least not for my use-case. This makes sense because most websites have no need for their users to view individual versions of their sites. This brings us back to the source code.</p><p>I know that having a switch statement for each component to export the correct version is not sustainable at all. But what if I kept the entire site itself separated in version folders. This means I would just need one top-level switch statement to get the correct version of the full site. If I want to start a new version of the site, I simply have to copy and paste the most recent version into a new version folder. Then just add a new case to the top-level switch statement. Now this new version folder is a free-for-all environment to change whatever I want, and not worry about affecting the other versions.</p><p>This will lead to a lot of duplicated code. I know. This will also get more complicated as I add more features. I also know that. For now though, this is the solution that I believe will work best for me, and I will revisit this in the future if I need to.</p><h1>Struggles</h1><p>Once I removed all of the component level switch statements, created the top level version folder, and added a new <code>v2</code> folder, I was left trying to figure out how to switch between them. The switch statements I was using before seemed to work pretty well, so I decided to use a React context provider to provide the version, and a simple dropdown that would change the version in context. It wasn&#x27;t until I had fully set this up that I realized I had a problem.</p><p>I really wanted the url to change with the version. For example, if I typed in <code>sydlauren.com/v1</code>><code>sydlauren.com/v1</code></a> I should see version 1 of the website. If I changed the url to <code>sydlauren.com/v2</code>, I should see version 2. Perhaps there was a way to keep the context provider solution and still get this url behavior working, but why struggle with that when there&#x27;s already a perfect solution to this sitting in my code?</p><p>Back to the switch statements! But this time, with React Router. With React Router, I can switch on the path, and render the different site version depending on if <code>v1</code> or <code>v2</code> is in the url. This is revolutionary stuff guys. You&#x27;re welcome for this amazing insight.</p><p>Anyways, the code basically looks like this:</p><pre><code><code>import SydLaurenV1 from &#x27;./v1&#x27;;
import SydLaurenV2 from &#x27;./v2&#x27;;

const CURRENT_VERSION = &#x27;v2&#x27;;

ReactDOM.render(
  &lt;Router&gt;
    &lt;Switch&gt;
      &lt;Route path=&#x27;/v1&#x27;&gt;
        &lt;SydLaurenV1 /&gt;
      &lt;/Route&gt;
      &lt;Route path=&#x27;/v2&#x27;&gt;
        &lt;SydLaurenV2 /&gt;
      &lt;/Route&gt;
      &lt;Redirect from=&quot;/&quot; to={\`/\${CURRENT_VERSION}\`} /&gt;
    &lt;/Switch&gt;
  &lt;/Router&gt;,
  document.getElementById(&#x27;root&#x27;)
);</code></pre><p>
</p><p>Huzzah! I now have two fully separate versions of my site, deployed on a single domain, and I can switch between them at will by adding a different version to the url. That&#x27;s time travel baby.</p><p>The last thing I had to untangle to get this to work was the CSS. All my CSS styles were global at this point, so to stop styles in separate versions from affecting one another, I switched all my stylesheets to be CSS modules. This gives every class name a unique identifier. So even if the same class is used in two separate versions, only the styles from the module that was used will be applied. </p><h1>Key Takeaways</h1><p>This better be worth it.</p><p>
</p></div>`;