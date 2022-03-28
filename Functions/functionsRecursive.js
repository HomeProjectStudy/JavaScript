function recursive(max) {
  if (max >= 10) return;
  max++;

  recursive(max);
}

// Função recursiva chama ela mesmo, até que condição se satisfaça.
