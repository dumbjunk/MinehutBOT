import { GuildConfiguration } from './guildConfiguration';
import { ALL_MODLOG_EVENTS } from './common';

export const guildConfigs: Map<string, GuildConfiguration> = new Map();

// honclick

guildConfigs.set('795515191319855154', {
	id: '795515191319855154',
	main: true,
	roles: {
		muted: '795521014217179168',
		robot: '795519334159220736',
		boostersPass: '795712937792241674',
		nitroBooster: '795710224434462762',
		juniorModerator: '795519290639908875',
		moderator: '795519245311672341',
		seniorModerator: '795519188407025694',
		manager: '795519153020600360',
		admin: '795518995905511424',
	},
	features: {
		modLog: {
			channel: '795517224260861953',
			events: ALL_MODLOG_EVENTS,
			prefix: '',
		},
		boosterPass: {
			maximumGrantedBoosterPasses: 1,
		},
		reactionRole: {
			channel: '795768127303974982',
			roles: [
				{ roleId: '795767810835480576', emoji: '📢' }, // Announcements
				{ roleId: '795767847309017135', emoji: '📝' }, // Changelog
			],
		},
	},
});
