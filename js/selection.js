export function selectNode(node){
 node.selected=true;
}

export function clearSelection(nodes){
 nodes.forEach(node=>node.selected=false);
}
