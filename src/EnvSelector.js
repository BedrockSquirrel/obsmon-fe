function EnvSelector({envs, selected}) {
	return (
		<div className="grid grid-cols-1 height-full justify-items-stretch text-right min-w-fit">
			{envs.map(function(env, i) {
				return <h3 className={`p-4 m-0 cursor-pointer text-xl ${selected == env.name ? 'border-r-4 border-gray-300 text-gray-300' : 'hover:bg-gray-700'}`}>{env.name}</h3>
			})}
		</div>
	);
}

export default EnvSelector;