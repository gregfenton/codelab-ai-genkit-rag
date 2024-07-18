/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { configureGenkit } from '@genkit-ai/core';
import { dotprompt } from '@genkit-ai/dotprompt';
import { firebase } from '@genkit-ai/firebase';
import { vertexAI } from '@genkit-ai/vertexai';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeesoQ76IEu1axmt2fuZijCKIUXSpjZAo",
  authDomain: "genkit-test-8b8aa.firebaseapp.com",
  projectId: "genkit-test-8b8aa",
  storageBucket: "genkit-test-8b8aa.appspot.com",
  messagingSenderId: "203974281862",
  appId: "1:203974281862:web:5091343035572549a75f07"
};

export const getProjectId = () => {
  return firebaseConfig.projectId;
};

export const config = configureGenkit({
  plugins: [
    firebase({
      projectId: getProjectId(),
      traceStore: { collection: 'traceStore' },
      flowStateStore: { collection: 'flowTraceStore' },
    }),
    vertexAI({
      projectId: getProjectId(),
      location: 'us-central1',
    }),
    dotprompt(),
  ],
  flowStateStore: 'firebase',
  traceStore: 'firebase',
  enableTracingAndMetrics: true,
  logLevel: 'debug',
});
