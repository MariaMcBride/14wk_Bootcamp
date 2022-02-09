package zookeeper;

public class Bat extends Mammal {

	public Bat() {
		super.setEnergyLevel(300);
	}
	
	public void fly() {
		System.out.println("*Ping ping click click*");
		this.setEnergyLevel(getEnergyLevel() - 50);
	}
	
	public void eatHumans() {
		System.out.println("*Munch munch gulp*");
		this.setEnergyLevel(getEnergyLevel() + 25);
	}
	
	public void attackTown() {
		System.out.println("*Crackle, sizzle, snip-snap-whoosh, the screams of terrified people*");
		this.setEnergyLevel(getEnergyLevel() - 100);
	}

}
