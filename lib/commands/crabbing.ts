import { Attachment } from 'discord.js';

export default home_scope => {
	const { message } = home_scope;
	const attached = new Attachment(
		'./lib/resources/crabbing.jpg',
		'crabbing.jpg');
	message.channel.send('Danny, having a jolly time.', attached);
};