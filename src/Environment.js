function Environment({env}) {
	return (
		<div className="p-2 text-center w-full p-4">
			<h2 className="text-3xl">{env.name}</h2>
			<Metadata env={env} />
			<Nodes env={env} />
			<Tools env={env} />
			<GithubActions env={env} />
		</div>
	);
}

function Metadata({env}) {
	return (
		<EnvSection heading="Network details" body="Contracts, time running, version, etc." />
	);
}

function Nodes({env}) {
	return (
		<EnvSection heading="Nodes" body="Status of nodes, host names, links to their datadog logs" />
	);
}

function Tools({env}) {
	return (
		<EnvSection heading="Tools" body="Links to env tools (Obscuro Scan, Obscuro Gateway, faucet etc.)" />
	);
}

function GithubActions({env}) {
	return (
		<EnvSection heading="Github" body="GH deploy and monitoring jobs details" />
	);
}

function EnvSection({heading, body}) {
	return (
		<div className="text-left mb-8">
			<h2 className="italic text-xl">{heading}</h2>
			<div className="body border-t border-gray-700">{body}</div>
		</div>
	);
}

export default Environment;