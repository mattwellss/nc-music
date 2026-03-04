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
	<NcFormGroup :label="name">
		<div class="field">
			<NcTextField
				:label="t('music', 'API Token')"
				v-model="api_key"
				@input="update(`${identifier}_api_key`, $event.target.value)"
			/>
			<NcPasswordField
				:label="t('music', 'API Secret')"
				v-model="api_secret"
				@input="update(`${identifier}_api_secret`, $event.target.value)"
			/>
		</div>
	</NcFormGroup>
</template>
<script>
	import axios from '@nextcloud/axios'
	import { showError, showSuccess } from '@nextcloud/dialogs'
	import { confirmPassword } from '@nextcloud/password-confirmation'
	import { generateOcsUrl } from '@nextcloud/router'
	import NcFormGroup from '@nextcloud/vue/components/NcFormGroup'
	import NcPasswordField from '@nextcloud/vue/components/NcPasswordField'
	import NcTextField from '@nextcloud/vue/components/NcTextField'
	import { debounce } from 'lodash'

	export default {
		name: 'ScrobbleSettings',
		components: {
			NcFormGroup,
			NcTextField,
			NcPasswordField
		},
		props: [
			'scrobbler',
		],
		data() {
			return { ...this.scrobbler }
		},
		methods: {
			update: debounce(async (key, value) => {
				const url = generateOcsUrl('/apps/provisioning_api/api/v1/config/apps/{appId}/{key}', {
					appId: 'music',
					key: key
				});

				try {
					await confirmPassword();
					const { data } = await axios.post(url, { value })
					if (data.ocs?.meta?.status !== 'ok') {
						throw new Error();
					}
					showSuccess(t('music', 'Updated {key}!', {key: key}));
				} catch (e) {
					showError(t('music', 'Failed to update {key}', {key: key}));
				}
			}, 200)
		}
	}
</script>

<style>
.field {
	max-width: 400px;
}
</style>
