<!--
  - @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
  -
  - @author Julius Härtl <jus@bitgrid.net>
  -
  - @license GNU AGPL version 3 or any later version
  -
  - This program is free software: you can redistribute it and/or modify
  - it under the terms of the GNU Affero General Public License as
  - published by the Free Software Foundation, either version 3 of the
  - License, or (at your option) any later version.
  -
  - This program is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  - GNU Affero General Public License for more details.
  -
  - You should have received a copy of the GNU Affero General Public License
  - along with this program. If not, see <http://www.gnu.org/licenses/>.
  -
  -->

<template>
	<div id="editor-wrapper">
		<button class="icon-close" @click="close" />
		<button class="icon-share" @click="share" />
		<ReadOnlyEditor :content="initial.content" :is-rich-editor="true" />
		<hr>
		<h3>Debug output</h3>
		<pre>Last request time: {{ log.mtime }}</pre>
		<pre>{{ messages }}</pre>
	</div>
</template>

<script>
import Vue from 'vue'
import axios from '@nextcloud/axios'
import ReadOnlyEditor from '../components/ReadOnlyEditor'

const log = Vue.observable({
	messages: [],
	mtime: 0
})

window.OCP.DirectEditing = {
	close() {
		log.messages.push('OCP.DirectEditing.close got called')
	}
}

setInterval(() => {
	axios.get(OC.generateUrl('apps/text/direct/session/create?token=' + OCP.InitialState.loadState('text', 'directEditingToken'))).then(({ data }) => {
		Vue.set(log, 'mtime', data.mtime)
	})
}, 1000)

window.addEventListener('message', function(message) {
	log.messages.push(message.data)
})
export default {
	name: 'DirectEditing',
	components: { ReadOnlyEditor },
	data() {
		return {
			initial: OCP.InitialState.loadState('text', 'file'),
			messages: log.messages,
			log: log
		}
	},
	methods: {
		close() {
			window.postMessage('close')
		},
		share() {
			window.postMessage('share')
		}
	}
}
</script>

<style scoped>
	button {
		width: 44px;
		height: 44px;
	}
	#editor-wrapper {
		width: 100%;
	}
	#editor-wrapper::v-deep .ProseMirror {
		width: 100%;
		max-width: 700px;
		margin: auto;
		opacity: 1;
		border: none;
		background-color: transparent;
	}
	pre {
		width: 100%;
		max-width: 700px;
		margin: auto;
		background-color: var(--color-background-dark);
	}
</style>
