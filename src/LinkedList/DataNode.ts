export default class DataNode<E> {
  data: E;
  next: DataNode<E>;

  constructor(data: E = null, next: DataNode<E> = null) {
		this.data = data;
		this.next = next;
  }
}
