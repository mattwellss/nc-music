<!--
	 /**
	 * ownCloud - Music app
	 *
	 * This file is licensed under the Affero General Public License version 3 or
	 * later. See the COPYING file.
	 *
	 * @author Matthew Wells
	 * @copyright Matthew Wells 2026
	 */
-->

<template>
	<NcSettingsSection
		:name="t('music', 'Music')"
		class="music-settings">
		<template v-for="scrobbler in scrobblers" :key="scrobbler.identifier">
			<ScrobbleSettings :scrobbler="scrobbler" :identifier="scrobbler.identifier" :name="scrobbler.name"/>
		</template>
	</NcSettingsSection>
</template>

<script>
 import { loadState } from '@nextcloud/initial-state'
 import ScrobbleSettings from './ScrobbleSettings.vue';
 import NcSettingsSection from '@nextcloud/vue/components/NcSettingsSection'

 export default {
	 name: 'AdminSettings',
	 components: {
		 NcSettingsSection,
		 ScrobbleSettings
	 },

	 data() {
		 return {
			 scrobblers: loadState('music', 'scrobblers', [])
		 }
	 }
 }
</script>
