module.exports = {
	name: 'clickButton',

	run: async (client, message, args) => {
		client.on('clickButton', async button => {
			if (button.id === 'testy') {
				button.channel.send(`${button.clicker.user.tag} clicked button!`);
			}
		});
	}
};
