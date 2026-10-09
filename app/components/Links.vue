<template>
    <v-row no-gutters style="margin-top: 20px; margin-bottom: 20px;margin-left: 75px;">
        <v-tooltip bottom open-on-hover>>
            <template v-slot:activator="{ props }">
                <a
                    href="https://www.linkedin.com/in/jomari-miones-22b298219"
                    target="_blank"
                    rel="noopener noreferrer"
                    v-bind="props"
                    style="text-decoration:underline;"
                >
                    <v-icon size="30" color="white">mdi-linkedin</v-icon>
                </a>
            </template>
            <span>LinkedIn</span>
        </v-tooltip>
    </v-row>
</template>