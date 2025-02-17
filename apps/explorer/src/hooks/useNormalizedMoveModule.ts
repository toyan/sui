// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { useRpcClient } from '@mysten/core';
import { useQuery } from '@tanstack/react-query';

import type { ObjectId } from '@mysten/sui.js';

export function useNormalizedMoveModule(
    packageId?: ObjectId | null,
    moduleName?: string | null
) {
    const rpc = useRpcClient();
    return useQuery(
        ['normalized-module', packageId, moduleName],
        async () => await rpc.getNormalizedMoveModule(packageId!, moduleName!),
        {
            enabled: !!(packageId && moduleName),
        }
    );
}
