<template>
    <section>
        <div class="container">
            <h2 class="text-3xl section-title w-fit mx-auto font-bold text-darker">
                {{ $t('outClients.heading') }}
            </h2>
            <p class="text-dark mt-5 text-center text-sm w-3/5 sm:w-nine mx-auto">
                {{ $t('outClients.description') }}
            </p>
            <ul class="grid grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-2 mt-8">
                <li v-for="item in 14" :key="item">
                    <div
                        class="w-full h-full aspect-video rounded-xl overflow-hidden bg-white main-border flex-center"
                    >
                        <img
                            :src="`/clients/${item}.png`"
                            alt=""
                            class="w-nine h-nine object-contain mix-blend-multiply"
                        />
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>
