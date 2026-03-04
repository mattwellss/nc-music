/**
 * ownCloud - Music app
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Matthew Wells
 * @copyright Matthew Wells 2026
 */

import { translate as t } from '@nextcloud/l10n';
import { createApp } from 'vue';
import AdminSettings from './vue-admin/AdminSettings.vue';

const app = createApp(AdminSettings);
app.config.globalProperties.t = t;
app.mount('#admin-music');