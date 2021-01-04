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
		}
	}
});
