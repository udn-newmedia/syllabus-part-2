<template>
  <div style="height:100vh" class="victim-list">
    <span
      class="victim-data"
      :style="{ top: `${victim.y}%`, left: `${victim.x}%`, opacity: victim.opacity }"
      v-for="victim in victims"
      :key="victim.id"
    >
      <span>
        {{ victim.name }}
        <span>
          <font-awesome-icon :icon="['fas', victim.peopleType]" size="2x" />
        </span>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'VictimsList',
  data() {
    const victims = []
    const peopleList = [
      { name: '吉野家', description: '日式牛丼店' },
      { name: '麥當勞', description: '美國速食店' },
      { name: '川普', description: '美國總統' },
      { name: '陳時中', description: '台灣衛福部長' }
    ]
    const peopleType = [
      'blind',
      'user-injured',
      'user-graduate',
      'people-carry'
    ]
    for (let i = 0; i < 1000; i += 1) {
      victims.push({
        data: `${i}：${peopleList[Math.floor(Math.random() * (2 + 1))].name}`,
        id: `message-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100 * 5,
        opacity: i % 40 === 0 ? 1 : 0.5,
        peopleType: peopleType[Math.floor(Math.random() * 3)]
      })
    }
    return { victims }
  },
  methods: {}
}
</script>

<style lang="scss">
.victim-list {
  position: relative;
}
.victim-data {
  position: absolute;
}
</style>
